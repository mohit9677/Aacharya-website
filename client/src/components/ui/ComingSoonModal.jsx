import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSmartphone, FiPhoneCall } from 'react-icons/fi';
import './ComingSoonModal.css';

export default function ComingSoonModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="coming-soon-overlay" onClick={onClose}>
                    <motion.div
                        className="coming-soon-modal"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {/* iPhone style notch */}
                        <div className="modal-notch"></div>

                        <div className="modal-content">
                            <div className="modal-icon-wrapper">
                                <FiSmartphone className="modal-icon" />
                            </div>

                            <h2 className="modal-title">Coming Soon!</h2>

                            <div className="modal-text">
                                <p>This feature will be live soon.</p>
                                <p>Still if you wish to explore the dashboard,</p>
                                <p className="modal-highlight">Feel free to contact us!</p>
                                <p>We would love to assist you.</p>
                            </div>

                            <div className="modal-actions">
                                <a href="mailto:support@astrobharatai.com" className="btn-solid">
                                    <FiPhoneCall /> Contact Support
                                </a>
                                <button className="btn-outline" onClick={onClose}>
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
