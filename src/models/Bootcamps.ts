import mongoose from 'mongoose';

interface BootcampType {
  name: string;
  slug: string;
  description: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  location: unknown;
  careers: string;
  averageRating: number;
  averageCost: number;
  photo: string;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  createdAt: Date;
}

const BootcampSchema = new mongoose.Schema<BootcampType>({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxLength: [50, 'Name cannot exceed 50 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxLength: [500, 'Name cannot exceed 500 characters']
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  phone: {
    type: String,
    maxLength: [20, 'Phone cannot exceed 20 characters']
  },
  email: {
    type: String,
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please enter a valid string']
  },
  address: {
    type: String,
    required: [true, 'Please add a address']
  },
  location: {
    //GEOJson Point
    type: {
      type: String,
      enum: ['Point'],
      required: false
    },
    coordinates: {
      inedx: '2dsphere',
      type: [Number],
      required: false
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'rating can not be more than 10']
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuarantee: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
