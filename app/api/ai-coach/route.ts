import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages, userProfile } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;

    // Build user description for prompt context
    const profileText = userProfile 
      ? `User Profile:
         - Name: ${userProfile.name || 'Athlete'}
         - Age/DOB: ${userProfile.dob || 'Not provided'}
         - Gender: ${userProfile.gender || 'Not provided'}
         - Height: ${userProfile.height ? `${userProfile.height} cm` : 'Not provided'}
         - Weight: ${userProfile.weight ? `${userProfile.weight} kg` : 'Not provided'}
         - Goals: ${userProfile.goals && userProfile.goals.length > 0 ? userProfile.goals.join(', ') : 'General fitness'}
         - Activity Level: ${userProfile.activityLevel || 'Not provided'}
         - Bio: ${userProfile.bio || 'Not provided'}`
      : "User Profile: Not provided";

    const systemPrompt = `You are the FitTrack AI Coach, a world-class, empathetic, and knowledgeable health and fitness expert.
Your goal is to guide the user on their wellness journey based on their onboarding information.

Always keep your tone inspiring, positive, and highly personalized! Use the user's name if known.

Here is the current user's details for personalization:
${profileText}

If they ask for plans or schedules, provide clear, bulleted, and realistic advice that aligns with their goals and current level. Do not recommend dangerous workloads or extreme diets. Make suggestions specific to their height, weight, activity level, and goals.`;

    // 1. If OpenRouter API key exists, call OpenRouter
    if (apiKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://fittrack.com", // Optional, for OpenRouter analytics
            "X-Title": "FitTrack Premium Platform", // Optional, for OpenRouter analytics
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash", // Excellent, fast, highly intelligent model
            messages: [
              { role: "system", content: systemPrompt },
              ...messages
            ],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ text: reply, source: "openrouter" });
          }
        }
      } catch (err) {
        console.error("OpenRouter API call failed, falling back to mock:", err);
      }
    }

    // 2. Mock mode fallback if no key or API failed (produces high-quality, personalized mock responses)
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let mockResponse = "";

    const userName = userProfile?.name?.split(" ")[0] || "Athlete";
    const userGoalList = userProfile?.goals || [];
    
    if (lastUserMessage.includes("diet") || lastUserMessage.includes("eat") || lastUserMessage.includes("nutrition") || lastUserMessage.includes("food")) {
      mockResponse = `Hey **${userName}**! 🥗

Based on your current details (Weight: **${userProfile?.weight || 70} kg**, Height: **${userProfile?.height || 170} cm**), here is a personalized nutrition framework to fuel your goals:

### Key Nutrition Targets
- **Daily Calorie Target**: ~2,100 kcal (adjusted for your *${userProfile?.activityLevel?.replace('_', ' ') || 'moderate'}* activity level).
- **Protein Goal**: ~120g - 140g per day (essential to support muscle recovery and tissue repair).
- **Hydration**: At least 3.2 liters of water daily.

### Sample Meal Structure:
1. **Breakfast (8:00 AM)**: Oatmeal made with almond milk, 1 scoop of protein powder, a handful of blueberries, and 1 tbsp chia seeds.
2. **Lunch (1:00 PM)**: Grilled chicken breast (150g) or tofu blocks, quinoa (1 cup), steamed broccoli, and half an avocado.
3. **Pre-workout Snack (5:00 PM)**: An apple or banana with a small handful of almonds.
4. **Dinner (8:00 PM)**: Baked salmon or lentil stew, sweet potato mash, and a large mixed greens salad with olive oil dressing.

How does this sound to you? Do you have any dietary restrictions (like vegan, gluten-free, etc.) we should accommodate?`;
    } 
    else if (lastUserMessage.includes("workout") || lastUserMessage.includes("exercise") || lastUserMessage.includes("plan") || lastUserMessage.includes("routine")) {
      const mainGoal = userGoalList.length > 0 ? userGoalList[0].replace('_', ' ') : 'fitness';
      
      mockResponse = `Hi **${userName}**! 💪 Let's map out a tailored workout plan designed specifically to help you **${mainGoal}** while keeping your *${userProfile?.activityLevel?.replace('_', ' ') || 'sedentary'}* baseline in mind.

### Recommended Weekly Split
- **Day 1: Full Body Strength** (Focus: Compound movements, 3 sets x 10 reps)
- **Day 2: Cardio & Core** (20-30 mins of moderate-intensity steady-state cardio + light core plank hold)
- **Day 3: Active Recovery / Stretching** (Focus: Yoga, walking, flexibility)
- **Day 4: Upper Body Push/Pull** (Focus: Shoulder, chest, back, 3 sets x 12 reps)
- **Day 5: Lower Body Power** (Focus: Squats, lunges, calf raises, 3 sets x 10 reps)
- **Day 6 & 7: Rest & Rejuvenate**

### Essential Tips:
1. **Warm Up**: Always spend 5-10 minutes warming up your joints (arm circles, leg swings).
2. **Progressive Overload**: Focus on improving your form first, then gradually increase resistance or volume.
3. **Rest**: Take 60-90 seconds of rest between working sets to recover.

Would you prefer a **home-based bodyweight routine** or a **gym-based weightlifting routine**?`;
    }
    else if (lastUserMessage.includes("hello") || lastUserMessage.includes("hi") || lastUserMessage.includes("hey")) {
      const goalsText = userGoalList.length > 0 
        ? `I see your main goals are **${userGoalList.map((g: string) => g.replace('_', ' ')).join(", ")}**`
        : "I'm ready to help you map out your personal training, nutrition, and recovery routines";

      mockResponse = `Hello **${userName}**! 👋 

Welcome to your **FitTrack AI Coaching Space**. I'm absolutely thrilled to partner with you on your health and wellness journey! 

${goalsText}. 

How can I best support you today? You can ask me questions like:
- *"Can you design a custom weekly workout routine for me?"*
- *"Help me plan a high-protein nutrition guide."*
- *"What's the best way to stay motivated on busy days?"*`;
    }
    else {
      mockResponse = `Awesome question, **${userName}**! 🌟

Based on your current fitness goals and *${userProfile?.activityLevel?.replace('_', ' ') || 'active'}* lifestyle, here are my top recommendations for you:

1. **Be Consistent**: Small, daily habits always outperform intense but irregular workouts.
2. **Prioritize Recovery**: Aim for 7-8 hours of quality sleep to let your body repair and build stronger muscles.
3. **Listen to Your Body**: Adjust your intensity level if you feel persistent soreness or joint fatigue.

Tell me a bit more about what you're hoping to achieve next, and I can give you a more specific plan!`;
    }

    // Simulate network delay for mock response to feel natural
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ text: mockResponse, source: "mock-backend" });
  } catch (error) {
    console.error("AI Coach API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
