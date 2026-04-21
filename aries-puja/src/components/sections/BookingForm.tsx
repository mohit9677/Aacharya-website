import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { packages } from "./Packages";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  dob: z.string().min(1, "Date of birth is required"),
  tob: z.string().min(1, "Time of birth is required"),
  pob: z.string().min(2, "Place of birth is required"),
  pujaDate: z.string().min(1, "Preferred puja date is required"),
  packageId: z.string().min(1, "Please select a package"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  selectedPackage: string;
  setSelectedPackage: (id: string) => void;
}

export function BookingForm({ selectedPackage, setSelectedPackage }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      packageId: selectedPackage,
    },
  });

  const watchedPkg = watch("packageId");

  const onSubmit = async (_data: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const onPickPackage = (id: string) => {
    setSelectedPackage(id);
    setValue("packageId", id, { shouldValidate: true });
  };

  return (
    <section id="book" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">
            Book Your Puja
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
            Begin Your Sankalpa
          </h2>
          <p className="text-foreground/70 text-lg">
            Share your janma vivara (birth details). Our pandit-ji will personally
            confirm your puja date within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-card border-2 border-card-border rounded-2xl p-8 md:p-12 shadow-xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-accent mb-3">
                    Sankalpa Received
                  </h3>
                  <p className="text-foreground/70 max-w-md mx-auto leading-relaxed mb-2">
                    Your booking request has reached us. Our pandit-ji will call you within
                    24 hours to confirm the muhurat and finalise the puja arrangements.
                  </p>
                  <p className="font-sanskrit text-xl text-primary mt-6">
                    शुभं भवतु
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      reset();
                      setSubmitted(false);
                    }}
                    className="mt-8 rounded-full border-accent/30"
                  >
                    Make Another Booking
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-accent mb-2 block">Full Name</Label>
                      <Input id="name" placeholder="As per your janma kundali" {...register("name")} />
                      {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-accent mb-2 block">Phone (WhatsApp)</Label>
                      <Input id="phone" type="tel" placeholder="+91 98XXXXXXXX" {...register("phone")} />
                      {errors.phone && <p className="text-destructive text-xs mt-1.5">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-accent mb-2 block">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email.message}</p>}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <Label htmlFor="dob" className="text-accent mb-2 block">Date of Birth</Label>
                      <Input id="dob" type="date" {...register("dob")} />
                      {errors.dob && <p className="text-destructive text-xs mt-1.5">{errors.dob.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="tob" className="text-accent mb-2 block">Time of Birth</Label>
                      <Input id="tob" type="time" {...register("tob")} />
                      {errors.tob && <p className="text-destructive text-xs mt-1.5">{errors.tob.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="pob" className="text-accent mb-2 block">Place of Birth</Label>
                      <Input id="pob" placeholder="City, State" {...register("pob")} />
                      {errors.pob && <p className="text-destructive text-xs mt-1.5">{errors.pob.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="pujaDate" className="text-accent mb-2 block">Preferred Puja Date</Label>
                    <Input id="pujaDate" type="date" {...register("pujaDate")} />
                    {errors.pujaDate && <p className="text-destructive text-xs mt-1.5">{errors.pujaDate.message}</p>}
                  </div>

                  <div>
                    <Label className="text-accent mb-3 block">Choose Package</Label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {packages.map((p) => {
                        const active = watchedPkg === p.id;
                        return (
                          <button
                            type="button"
                            key={p.id}
                            onClick={() => onPickPackage(p.id)}
                            className={`text-left rounded-lg border-2 p-4 transition-all ${
                              active
                                ? "border-primary bg-primary/10 shadow-md"
                                : "border-border hover:border-primary/50 bg-background"
                            }`}
                          >
                            <div className="font-serif font-bold text-lg text-accent">{p.name}</div>
                            <div className="text-primary font-semibold">{p.price}</div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.packageId && <p className="text-destructive text-xs mt-1.5">{errors.packageId.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-accent mb-2 block">Your Sankalpa / Message <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Share the specific intention of your puja — career, marriage, health, family peace..."
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Offering your sankalpa...
                      </>
                    ) : (
                      "Submit Booking Request"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By booking, you agree to our pandit-ji contacting you to confirm muhurat & arrangements.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
