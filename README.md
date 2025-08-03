# Samuel Kivairu Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Firebase.

## 🌐 Live Preview

[Click to View the Website](: https://github.com/samkiva/Kivairu-Samuel-Portfolio)  
                           https://sam-kiv-portfolio.web.app
## 🚀 Features

- **Modern Design**: Dark theme with cybersecurity aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations with Framer Motion
- **Firebase Integration**: Contact form with Firestore database
- **TypeScript**: Fully typed for better development experience
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting
- **Build Tool**: Vite
- **Forms**: React Hook Form with Yup validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samkiva/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Enable Firebase Hosting
   - Copy your Firebase config and update `src/config/firebase.ts`

4. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not already done)**
   ```bash
   firebase init
   ```
   - Select Hosting and Firestore
   - Choose your Firebase project
   - Set `dist` as your public directory
   - Configure as a single-page app (Yes)
   - Don't overwrite index.html

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### One-Click Deploy Script

Create a deploy script in `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && firebase deploy"
  }
}
```

Run deployment:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Hero.tsx        # Hero/About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── Contact.tsx     # Contact form
├── config/
│   └── firebase.ts     # Firebase configuration
├── App.tsx             # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The project uses a cybersecurity-inspired color scheme:
- Primary: Cyan (`#06B6D4`)
- Secondary: Emerald (`#10B981`)
- Background: Dark grays
- Accents: Various gradients

### Content
Update the content in each component:
- `Hero.tsx`: Personal information and bio
- `Projects.tsx`: Project details and links
- `Skills.tsx`: Technical skills and expertise
- `Contact.tsx`: Contact information

### Firebase Security
For production, update `firestore.rules` to implement proper security:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow write: if request.auth != null; // Require authentication
      allow read: if false; // Prevent reading contact submissions
    }
  }
}
```

## 📧 Contact Form

The contact form:
- Validates input using Yup schema
- Stores submissions in Firestore
- Provides user feedback on submission status
- Can be extended with email notifications via Cloud Functions

## 🔧 Cloud Functions (Optional)

To send email notifications when the contact form is submitted:

1. Create `functions/index.js`:
```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure your email service
const transporter = nodemailer.createTransporter({
  // Your email configuration
});

exports.sendContactEmail = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    
    // Send email notification
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'kivairusamuel9409@email.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });
  });
```

## 📱 Mobile Responsiveness

The website is built mobile-first with responsive breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance Optimizations

- Lazy loading of images
- Code splitting with React.lazy
- Optimized animations with Framer Motion
- Efficient Firebase queries
- Minimized bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Your Firebase Hosting URL]
- **Repository**: https://github.com/samkiva/Kivairu-Samuel-Portfolio
- **Contact**: kivairusamuel9409@email.com

---

Built with ❤️ by Samuel Kivairu (HexSentinel)
```
