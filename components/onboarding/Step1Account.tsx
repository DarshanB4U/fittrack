"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { Mail, User, Lock, Globe } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

export function Step1Account({ onNext }: { onNext: () => void }) {
  const { name, email, updateData } = useStore();
  const [passwordFocus, setPasswordFocus] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name, email, password: "" },
    mode: "onChange",
  });

  const passwordValue = watch("password") || "";
  const passwordStrength = Math.min(100, (passwordValue.length / 12) * 100);

  const onSubmit = (data: FormData) => {
    updateData({ name: data.name, email: data.email });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-muted-foreground">Start your journey to a better you.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1 relative">
          <label className="text-sm font-medium ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              {...register("name")}
              className={`w-full h-12 pl-10 pr-4 rounded-xl bg-background/50 border transition-all focus:outline-none focus:ring-2 ${
                errors.name ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && <p className="text-destructive text-xs ml-1 mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm font-medium ml-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              {...register("email")}
              className={`w-full h-12 pl-10 pr-4 rounded-xl bg-background/50 border transition-all focus:outline-none focus:ring-2 ${
                errors.email ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && <p className="text-destructive text-xs ml-1 mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm font-medium ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="password"
              {...register("password")}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              className={`w-full h-12 pl-10 pr-4 rounded-xl bg-background/50 border transition-all focus:outline-none focus:ring-2 ${
                errors.password ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="••••••••"
            />
          </div>
          {errors.password && <p className="text-destructive text-xs ml-1 mt-1">{errors.password.message}</p>}
          
          {(passwordFocus || passwordValue.length > 0) && (
            <div className="mt-2 flex gap-1 h-1.5 rounded-full overflow-hidden bg-white/10">
              <div 
                className={`h-full transition-all duration-300 ${
                  passwordStrength < 40 ? "bg-destructive" : passwordStrength < 80 ? "bg-yellow-500" : "bg-primary"
                }`}
                style={{ width: `${passwordStrength}%` }}
              />
            </div>
          )}
        </div>

        <Button type="submit" className="w-full h-12 mt-4 text-base" disabled={!isValid}>
          Continue
        </Button>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase">or</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <Button type="button" variant="outline" className="w-full h-12 text-base flex items-center justify-center gap-2">
          <Globe className="w-5 h-5" />
          Continue with Google
        </Button>
      </form>
    </div>
  );
}
