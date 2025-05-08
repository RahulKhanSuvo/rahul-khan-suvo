"use client";
import { GoPerson, GoMail, GoComment } from "react-icons/go";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";
import ContactInfo from "./ContactInfo";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    try {
      const res = await axios.post("api/message", { ...data });
      reset();
    } catch (error) {
    } finally {
    }
  };

  return (
    <SectionContainer id="contact">
      <div className="w-full mx-[16px] relative">
        <SectionHeader highlightedText="Touch" plainText="Get In" />
        <div className="my-10 grid md:grid-cols-2 gap-12">
          <div className="card card-shadow p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex flex-col gap-2" htmlFor="name">
                  <div className="flex items-center gap-2 ">
                    <GoPerson />
                    <span>Your Name</span>
                  </div>
                  <input
                    className="border border-gray-700  rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="What's your name?"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-2" htmlFor="email">
                  <div className="flex items-center gap-2 ">
                    <GoMail />
                    <span>Your Email</span>
                  </div>
                  <input
                    className="border border-gray-700  rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="Your email address"
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-2" htmlFor="message">
                  <div className="flex items-center gap-2 ">
                    <GoComment />
                    <span>Your Message</span>
                  </div>
                  <textarea
                    className="border border-gray-700  rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="What would you like to say?"
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </label>
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-md w-full font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
          {/* contact info */}
          <ContactInfo />
        </div>
      </div>
    </SectionContainer>
  );
}
