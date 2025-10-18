"use client"
import React, { useState } from "react";
import {
    Wallet,
    ShoppingCart,
    Building,
    Banknote,
    Globe,
    Phone,
    Megaphone,
    Briefcase,
    FileText,
    CreditCard,
    School,
    Car,
    Gift,
    Users,
    Shield,
    Calendar,
    Globe2,
    Laptop,
    Plane,
    LineChart
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function ProjectList() {
    const [filter, setFilter] = useState("type1");

    const projects = [
        // ===== TYPE ONE PROJECTS =====

        { id: 3, name: "E-Commerce Platform", icon: <ShoppingCart className="w-8 h-8 text-orange-500" />, type: "type1" },
        { id: 4, name: "Virtual Phone Number", icon: <Phone className="w-8 h-8 text-purple-500" />, type: "type1" },
        { id: 5, name: "Website Promotion Tool", icon: <Megaphone className="w-8 h-8 text-red-500" />, type: "type1" },
        { id: 8, name: "Online Resume Builder", icon: <FileText className="w-8 h-8 text-gray-500" />, type: "type1" },
        { id: 9, name: "Job Recruitment Portal", icon: <Briefcase className="w-8 h-8 text-indigo-500" />, type: "type1" },
        { id: 10, name: "Portfolio Website", icon: <Laptop className="w-8 h-8 text-green-400" />, type: "type1" },
        { id: 11, name: "School Management System", icon: <School className="w-8 h-8 text-yellow-500" />, type: "type1" },
        { id: 12, name: "Online Store (Dropshipping)", icon: <ShoppingCart className="w-8 h-8 text-pink-500" />, type: "type1" },
        { id: 13, name: "Payment Gateway Integration", icon: <CreditCard className="w-8 h-8 text-emerald-500" />, type: "type1" },

        { id: 18, name: "Car Rental Platform", icon: <Car className="w-8 h-8 text-gray-700" />, type: "type1" },
        { id: 19, name: "Donation & Charity Website", icon: <Gift className="w-8 h-8 text-pink-400" />, type: "type1" },
        { id: 20, name: "Referral Marketing App", icon: <Users className="w-8 h-8 text-indigo-400" />, type: "type1" },
        { id: 21, name: "Cyber Security Awareness Site", icon: <Shield className="w-8 h-8 text-red-600" />, type: "type1" },
        { id: 22, name: "Freelance Marketplace", icon: <Briefcase className="w-8 h-8 text-blue-500" />, type: "type1" },

        { id: 24, name: "Online Exam System", icon: <School className="w-8 h-8 text-orange-500" />, type: "type1" },
        { id: 25, name: "Global News Website", icon: <Globe2 className="w-8 h-8 text-gray-600" />, type: "type1" },

        // TYPE TWO
        { id: 1, name: "Online Banking System", icon: <Banknote className="w-8 h-8 text-blue-500" />, type: "type2" },
        { id: 6, name: "Consignment Website", icon: <Briefcase className="w-8 h-8 text-teal-500" />, type: "type2" },

        { id: 14, name: "Crypto Investment Platform", icon: <Wallet className="w-8 h-8 text-purple-400" />, type: "type2" },
        { id: 2, name: "Loan Management App", icon: <Building className="w-8 h-8 text-green-500" />, type: "type2" },
        { id: 7, name: "Visa Application System", icon: <Plane className="w-8 h-8 text-blue-600" />, type: "type2" },
        { id: 15, name: "Trading Bot App", icon: <Wallet className="w-8 h-8 text-yellow-500" />, type: "type2" },
        { id: 16, name: "Forex Signal Website", icon: <Globe className="w-8 h-8 text-blue-400" />, type: "type2" },
        { id: 17, name: "Event Booking System", icon: <Calendar className="w-8 h-8 text-red-400" />, type: "type2" },
        { id: 23, name: "Travel Agency Portal", icon: <Plane className="w-8 h-8 text-cyan-500" />, type: "type2" },
         { id: 26, name: "Broker Platform", icon: <LineChart className="w-8 h-8 text-emerald-600" />, type: "type2" },
    ];

    const filteredProjects = projects.filter((p) => p.type === filter);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold  text-gray-800">Project Ideas</h1>

                        {/* Select Filter */}
                        <select
                            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="type1">Type One Projects</option>
                            <option value="type2">Type Two Projects</option>
                        </select>
                    </div>

                    {/* Grid Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="mb-4">{project.icon}</div>
                                <h2 className="text-lg font-semibold text-gray-700">{project.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

        </div>
    );
}
