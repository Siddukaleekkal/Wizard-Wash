"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function EstimateForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        address: "",
        date: "",
        details: "",
        honeypot: "", // Bot trap
        mathAnswer: "" // Human check
    });

    const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0 });

    React.useEffect(() => {
        setMathChallenge({
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    mathChallenge // Send the question details for verification
                }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || "Something went wrong. Please try again or call us directly.");
            }
        } catch (err) {
            setError("Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glassy-card p-12 text-center flex flex-col items-center gap-6"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-heading font-black uppercase text-[#1e1e3f]">Thank You!</h2>
                <p className="text-slate-600 text-lg font-body max-w-sm">
                    Your request has been received. One of our specialists will contact you within 24 hours to provide your estimate.
                </p>
                <Button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "",
                            address: "",
                            date: "",
                            details: "",
                            honeypot: "",
                            mathAnswer: ""
                        });
                        // Refresh math challenge
                        setMathChallenge({
                            num1: Math.floor(Math.random() * 10) + 1,
                            num2: Math.floor(Math.random() * 10) + 1
                        });
                    }}
                    variant="outline"
                    className="mt-4 border-[#9138df] text-[#9138df] hover:bg-[#9138df] hover:text-white"
                >
                    Send Another Request
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glassy-card p-8 md:p-12 flex flex-col gap-8">
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-bold uppercase tracking-wider text-center">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="h-12" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="h-12" value={formData.email} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(804) 000-0000" required className="h-12" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="service" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Service Requested</Label>
                    <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9138df] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="">Select a service</option>
                        <option value="Residential Power Washing">Residential Power Washing</option>
                        <option value="Commercial Power Washing">Commercial Power Washing</option>
                        <option value="Roof Cleaning">Roof Cleaning</option>
                        <option value="Holiday Lighting">Holiday Lighting</option>
                        <option value="Fleet Maintenance">Fleet Maintenance</option>
                    </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="date" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Preferred Date of Service</Label>
                    <Input id="date" type="date" required className="h-12" value={formData.date} onChange={handleChange} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="address" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Service Address</Label>
                <Input id="address" placeholder="123 Magic Ave, Richmond, VA" required className="h-12" value={formData.address} onChange={handleChange} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="details" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">Project Details</Label>
                <Textarea
                    id="details"
                    placeholder="Tell us more about what you need cleaned..."
                    className="min-h-[120px] resize-none p-4"
                    required
                    value={formData.details}
                    onChange={handleChange}
                />
            </div>

            {/* Security Layer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                {/* Honeypot - Hidden from humans */}
                <div className="hidden" aria-hidden="true">
                    <Label htmlFor="honeypot">Leave this empty</Label>
                    <Input id="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                {/* Math Challenge */}
                <div className="space-y-2">
                    <Label htmlFor="mathAnswer" className="text-xs uppercase tracking-widest font-black text-[#1e1e3f]/70">
                        Human Check: What is {mathChallenge.num1} + {mathChallenge.num2}?
                    </Label>
                    <Input
                        id="mathAnswer"
                        type="text"
                        placeholder="Your answer"
                        required
                        className="h-12 border-[#9138df]/30 focus:border-[#9138df]"
                        value={formData.mathAnswer}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-[10px] text-slate-400 font-body leading-tight">
                    This simple check helps us prevent spam and ensures we can respond to your request quickly.
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-[#9138df] hover:bg-[#7a2ac1] text-white font-heading font-black uppercase tracking-[3px] text-lg rounded-xl shadow-[0_15px_30px_-10px_rgba(145,56,223,0.5)] transition-all hover:-translate-y-1 group disabled:opacity-70 disabled:hover:translate-y-0"
            >
                {loading ? "Sending..." : "Submit Request"} <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>

            <p className="text-center text-[11px] text-slate-400 font-heading font-bold uppercase tracking-widest">
                Safe. Professional. Insured.
            </p>
        </form>
    );
}
