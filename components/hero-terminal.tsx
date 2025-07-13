"use client"

import React, { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { FadeIn, ScaleIn } from './ui/animation-wrappers';

const HeroTerminal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const automationSteps = [
    { text: "Analyzing business workflow...", delay: 1000 },
    { text: "Identifying automation opportunities...", delay: 1500 },
    { text: "Designing AI-powered solution...", delay: 2000 },
    { text: "Deploying intelligent agents...", delay: 2500 },
    { text: "Workflow optimization complete!", delay: 3000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < automationSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, automationSteps[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <ScaleIn delay={1.0}>
    <div className="max-w-6xl mx-auto relative">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-mono text-gray-600 dark:text-gray-400">mure-ai-automation-engine</span>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-500">AUTOMATING</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm">
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            {/* Client Onboarding */}
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">→</span>
              <span className="text-foreground font-medium">Client: Fortune 500 Manufacturing</span>
            </div>
            <div className="pl-4 text-muted-foreground">
              Challenge: Manual invoice processing (2,000+ hrs/month)
            </div>
            
            {/* Automation Steps */}
            <div className="pt-2 space-y-2">
              {automationSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2 pl-4">
                  {index <= currentStep ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-400">{step.text}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                      <span className="text-muted-foreground">{step.text}</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Results */}
            {isComplete && (
              <div className="pt-4 space-y-2 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <span className="text-purple-400 font-semibold">IMPACT ACHIEVED:</span>
                </div>
                <div className="pl-6 space-y-1">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-400">95% reduction in processing time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-400">$2.4M annual cost savings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-400">Zero errors in 6 months</span>
                  </div>
                </div>
              </div>
            )}

            {/* Active Prompt */}
            <div className="flex items-center space-x-2 pt-4">
              <span className="text-blue-500">→</span>
              <span className="text-foreground font-medium">Ready to transform your business?</span>
              <span className="animate-pulse text-blue-500">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ScaleIn>
  );
};

export default HeroTerminal;