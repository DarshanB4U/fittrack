"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { Camera, AtSign, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be less than 20 characters"),
  bio: z.string().max(160, "Bio must be less than 160 characters").optional(),
});

type FormData = z.infer<typeof schema>;

export function Step5Profile({ onNext }: { onNext: () => void }) {
  const { name, username, bio, updateData } = useStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { 
      username: username || name.toLowerCase().replace(/\s+/g, ''), 
      bio 
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    updateData({ username: data.username, bio: data.bio });
    setIsSuccess(true);
    // Simulate API call and success animation before moving on
    setTimeout(() => {
      onNext();
    }, 2500);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setAvatarPreview(url);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full py-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100 }}
          className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-2 text-foreground"
        >
          You're all set!
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground"
        >
          Welcome to FitTrack. Preparing your dashboard...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Complete Profile</h2>
        <p className="text-muted-foreground">Add a personal touch to your account.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative group cursor-pointer">
            <div className={`w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden transition-all ${
              avatarPreview ? "border-primary" : "border-border group-hover:border-primary/50 bg-background"
            }`}>
              {avatarPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Upload</span>
            </div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleAvatarChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm font-medium ml-1">Username</label>
          <div className="relative">
            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              {...register("username")}
              className={`w-full h-12 pl-10 pr-4 rounded-xl bg-background border transition-all focus:outline-none focus:ring-2 ${
                errors.username ? "border-destructive focus:ring-destructive/20" : "border-border focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="username"
            />
          </div>
          {errors.username && <p className="text-destructive text-xs ml-1 mt-1">{errors.username.message}</p>}
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm font-medium ml-1">Bio (Optional)</label>
          <textarea
            {...register("bio")}
            className={`w-full h-24 p-4 rounded-xl bg-background border transition-all focus:outline-none focus:ring-2 resize-none ${
              errors.bio ? "border-destructive focus:ring-destructive/20" : "border-border focus:border-primary focus:ring-primary/20"
            }`}
            placeholder="Tell the community a bit about yourself..."
          />
          {errors.bio && <p className="text-destructive text-xs ml-1 mt-1">{errors.bio.message}</p>}
        </div>

        <Button type="submit" className="w-full h-12 mt-4 text-base" disabled={!isValid}>
          Complete Setup
        </Button>
      </form>
    </div>
  );
}
