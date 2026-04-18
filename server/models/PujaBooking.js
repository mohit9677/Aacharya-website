const mongoose = require('mongoose');

const pujaBookingSchema = new mongoose.Schema({
    // Puja identification
    pujaId: { type: String, required: true, trim: true },   // e.g. "surya-puja"
    pujaName: { type: String, required: true, trim: true }, // e.g. "Surya (Sun) Puja"

    // User details
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, default: '', trim: true },
    gotra: { type: String, default: '', trim: true },       // Family lineage (optional)

    // Booking slot
    bookingDate: { type: String, required: true },          // "YYYY-MM-DD" stored as string for easy daily queries
    startTime: { type: String, required: true },            // "HH:MM" (24-hr)
    endTime: { type: String, required: true },              // startTime + 5 hours (lock window)

    // Pricing & package
    package: {
        type: String,
        enum: ['basic', 'standard', 'premium'],
        default: 'basic',
    },
    amount: { type: Number, required: true },

    // Status
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending',
    },

    // Additional notes from user
    message: { type: String, default: '', trim: true },
}, { timestamps: true });

// Indexes for efficient availability queries
pujaBookingSchema.index({ pujaId: 1, bookingDate: 1 });
pujaBookingSchema.index({ bookingDate: 1, status: 1 });

module.exports = mongoose.model('PujaBooking', pujaBookingSchema);
