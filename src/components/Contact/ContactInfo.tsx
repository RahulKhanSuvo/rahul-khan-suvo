import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdOutlineSchedule,
} from "react-icons/md";

export default function ContactInfo() {
  const primaryColor = "text-[var(--primary)]";

  return (
    <div className="card card-shadow p-6 ">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className={`${primaryColor} mt-1`}>
            <MdOutlineMail size={24} />
          </div>
          <div>
            <h4 className="font-medium ">Email</h4>
            <a
              href="mailto:rahul.khan.suvo@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              rahul.khan.suvo@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className={`${primaryColor} mt-1`}>
            <MdOutlinePhone size={24} />
          </div>
          <div>
            <h4 className="font-medium ">Phone</h4>
            <a
              href="tel:+8801609-553810"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              +8801609-553810
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className={`${primaryColor} mt-1`}>
            <MdOutlineLocationOn size={24} />
          </div>
          <div>
            <h4 className="font-medium ">Location</h4>
            <p className="text-gray-400">Barisal, Bangladesh</p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-4">
          <div className={`${primaryColor} mt-1`}>
            <MdOutlineSchedule size={24} />
          </div>
          <div>
            <h4 className="font-medium ">Availability</h4>
            <p className="text-gray-400">Anytime (24 hours)</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-800">
        <h4 className="font-medium  mb-3">Connect With Me</h4>
        <div className="flex gap-4">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
