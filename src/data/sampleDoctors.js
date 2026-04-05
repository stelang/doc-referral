// Sample doctor data - structure matches Google Sheet columns
// In production, this will be replaced by Google Sheets API data

export const sampleDoctors = [
  {
    id: 1,
    name: "Dr. Anjali Mehta",
    specialization: "Cardiologist",
    hospital: "Lilavati Hospital",
    phone: "+91 98765 43210",
    area: "Bandra West",
    notes: "Available on weekends. Speaks Hindi, English, Marathi"
  },
  {
    id: 2,
    name: "Dr. Rajesh Kulkarni",
    specialization: "Orthopedic",
    hospital: "Hinduja Hospital",
    phone: "+91 98765 43211",
    area: "Mahim",
    notes: "Sports injury specialist"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    hospital: "Kokilaben Dhirubhai Ambani Hospital",
    phone: "+91 98765 43212",
    area: "Andheri West",
    notes: "Vaccination expert. Child-friendly"
  },
  {
    id: 4,
    name: "Dr. Vikram Desai",
    specialization: "General Physician",
    hospital: "Breach Candy Hospital",
    phone: "+91 98765 43213",
    area: "Breach Candy",
    notes: "House visits available for emergencies"
  },
  {
    id: 5,
    name: "Dr. Sunita Iyer",
    specialization: "Dermatologist",
    hospital: "Jaslok Hospital",
    phone: "+91 98765 43214",
    area: "Pedder Road",
    notes: "Cosmetic dermatology, Acne specialist"
  },
  {
    id: 6,
    name: "Dr. Arjun Nair",
    specialization: "Neurologist",
    hospital: "Fortis Hospital",
    phone: "+91 98765 43215",
    area: "Mulund",
    notes: "Migraine and stroke specialist"
  },
  {
    id: 7,
    name: "Dr. Kavita Patel",
    specialization: "Gynecologist",
    hospital: "Surya Mother & Child Care Hospital",
    phone: "+91 98765 43216",
    area: "Santacruz West",
    notes: "High-risk pregnancy expert"
  },
  {
    id: 8,
    name: "Dr. Sanjay Chopra",
    specialization: "Cardiologist",
    hospital: "Bombay Hospital",
    phone: "+91 98765 43217",
    area: "Marine Lines",
    notes: "Emergency cardiac care available"
  },
  {
    id: 9,
    name: "Dr. Neha Joshi",
    specialization: "Ophthalmologist",
    hospital: "Advanced Eye Hospital & Institute",
    phone: "+91 98765 43218",
    area: "Vile Parle",
    notes: "LASIK and cataract surgery"
  },
  {
    id: 10,
    name: "Dr. Amit Verma",
    specialization: "Dentist",
    hospital: "Smile Care Dental Clinic",
    phone: "+91 98765 43219",
    area: "Powai",
    notes: "Root canal specialist, Emergency dental care"
  }
];

// Get unique specializations for filter dropdown
export const getSpecializations = (doctors) => {
  return [...new Set(doctors.map(doc => doc.specialization))].sort();
};

// Get unique areas for filter dropdown
export const getAreas = (doctors) => {
  return [...new Set(doctors.map(doc => doc.area))].sort();
};
