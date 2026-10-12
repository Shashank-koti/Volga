import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { fadeUp } from '../utils/animations';
import {
  Upload,
  FileText,
  CheckCircle2,
  X,
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  AlertCircle,
  FileCheck2,
} from 'lucide-react';

export default function Procurement({ onNavigate }) {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    firstName: '',
    email: '',
    phone: '',
    position: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileSelect = (file) => {
    if (!file) return;
    setSelectedFile(file);
    if (errors.file) {
      setErrors((prev) => ({ ...prev, file: '' }));
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.companyDescription.trim()) newErrors.companyDescription = 'Brief description of your company is required';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!selectedFile) newErrors.file = 'File upload is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      companyDescription: '',
      firstName: '',
      email: '',
      phone: '',
      position: '',
    });
    setSelectedFile(null);
    setErrors({});
    setSubmitted(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title="Procurement"
        highlight="Procurement"
        description="Partner with Volga Solar Solutions. Submit your company credentials, capabilities, and documentation."
        onNavigate={onNavigate}
      />

      {/* Procurement Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070A0F] relative overflow-hidden border-b border-neutral-800 text-white">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="rounded-3xl bg-[#0B0F17] border border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Header inside Form Card */}
            <div className="mb-8 pb-6 border-b border-neutral-800/80">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block mb-1">
                Vendor & Supplier Registration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Procurement
              </h2>
              <p className="text-sm text-neutral-400 mt-1.5 leading-relaxed">
                Please complete the form below. All fields marked with an asterisk (<span className="text-primary">*</span>) are mandatory.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 sm:p-12 rounded-2xl bg-neutral-900/90 border border-primary/40 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Procurement Details Submitted Successfully
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2.5 max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.firstName}</span>. Your procurement submission for <span className="font-semibold text-white">{formData.companyName}</span> has been received. Our supply chain team will review your documentation and reach out.
                  </p>

                  {/* Summary of submitted details */}
                  <div className="mt-6 max-w-md mx-auto p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs space-y-2">
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400 font-mono">Company</span>
                      <span className="font-semibold text-white">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400 font-mono">Contact</span>
                      <span className="font-semibold text-white">{formData.firstName} ({formData.position})</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400 font-mono">Email</span>
                      <span className="font-semibold text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400 font-mono">Phone</span>
                      <span className="font-semibold text-white">{formData.phone}</span>
                    </div>
                    {selectedFile && (
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-neutral-400 font-mono">Uploaded File</span>
                        <span className="font-semibold text-primary truncate max-w-[200px] flex items-center gap-1">
                          <FileCheck2 className="w-3.5 h-3.5 shrink-0" />
                          {selectedFile.name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={resetForm}
                    >
                      Submit Another Response
                    </Button>
                    {onNavigate && (
                      <Button
                        variant="dark"
                        size="md"
                        onClick={() => onNavigate('home')}
                      >
                        Return to Home
                      </Button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <form key="procurement-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Field 1: Company name* */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-white mb-2 font-mono">
                      Company name<span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          errors.companyName ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                        } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40`}
                      />
                    </div>
                    {errors.companyName && (
                      <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Brief description of your company* */}
                  <div>
                    <label htmlFor="companyDescription" className="block text-sm font-semibold text-white mb-2 font-mono">
                      Brief description of your company<span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="companyDescription"
                      name="companyDescription"
                      rows={4}
                      value={formData.companyDescription}
                      onChange={handleChange}
                      placeholder="Briefly describe your company, products, equipment manufacturing, or services..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.companyDescription ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                      } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed`}
                    />
                    {errors.companyDescription && (
                      <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.companyDescription}
                      </p>
                    )}
                  </div>

                  {/* Grid for First name* & Email* & Phone* & Position* */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Field 3: First name* */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2 font-mono">
                        First name<span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter first name"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.firstName ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                          } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40`}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Field 4: Email* */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 font-mono">
                        Email<span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter corporate email"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.email ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                          } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Field 5: Phone* */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 font-mono">
                        Phone<span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.phone ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                          } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Field 6: Position* */}
                    <div>
                      <label htmlFor="position" className="block text-sm font-semibold text-white mb-2 font-mono">
                        Position<span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          id="position"
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          placeholder="e.g. Sales Director / Head of Procurement"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.position ? 'border-primary focus:ring-primary' : 'border-neutral-700 focus:border-primary'
                          } bg-neutral-950 text-white placeholder-neutral-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40`}
                        />
                      </div>
                      {errors.position && (
                        <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.position}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Field 7: File upload* and Upload File button */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2 font-mono">
                      File upload<span className="text-primary">*</span>
                    </label>

                    {/* Hidden Native File Input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="procurement-file-input"
                      className="hidden"
                      onChange={handleFileInputChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.zip"
                    />

                    {/* Dropzone Container */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative rounded-2xl border-2 border-dashed transition-all p-6 sm:p-8 cursor-pointer text-center ${
                        isDragging
                          ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                          : errors.file
                          ? 'border-primary/80 bg-neutral-950/80'
                          : selectedFile
                          ? 'border-primary/50 bg-neutral-950/90'
                          : 'border-neutral-700/90 hover:border-primary/60 bg-neutral-950/60 hover:bg-neutral-950/90'
                      }`}
                    >
                      {selectedFile ? (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                          <div className="flex items-center gap-3.5 min-w-0 text-left">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-white truncate max-w-[240px] sm:max-w-md">
                                {selectedFile.name}
                              </p>
                              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                                {formatFileSize(selectedFile.size)} • Ready to upload
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Explicit "Upload File" button to change/re-upload */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                fileInputRef.current?.click();
                              }}
                              className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors border border-neutral-700 flex items-center gap-1.5"
                            >
                              <Upload className="w-3.5 h-3.5 text-primary" />
                              <span>Upload File</span>
                            </button>

                            <button
                              type="button"
                              onClick={removeFile}
                              title="Remove file"
                              className="p-1.5 rounded-lg bg-neutral-800/80 hover:bg-primary/20 text-neutral-400 hover:text-primary transition-colors border border-neutral-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center space-y-3.5">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-md">
                            <Upload className="w-7 h-7" />
                          </div>

                          <div>
                            {/* Explicit Upload File button */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                fileInputRef.current?.click();
                              }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mb-2 cursor-pointer"
                            >
                              <Upload className="w-4 h-4" />
                              <span>Upload File</span>
                            </button>
                            <p className="text-xs text-neutral-400 mt-1">
                              or drag and drop your file here
                            </p>
                          </div>

                          <p className="text-[11px] font-mono text-neutral-500">
                            Accepted: PDF, DOC, DOCX, XLS, XLSX, ZIP (Max 25MB)
                          </p>
                        </div>
                      )}
                    </div>

                    {errors.file && (
                      <p className="mt-1.5 text-xs text-primary flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.file}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-neutral-400 font-mono hidden sm:inline-block">
                      Secure submission processed directly by Volga Solar
                    </span>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-3.5 shadow-xl shadow-primary/30"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
