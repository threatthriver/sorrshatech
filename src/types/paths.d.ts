// This file helps TypeScript understand the path aliases
// Update this if you add more path aliases in your tsconfig.json

declare module '@/pages/Waitlist' {
  import { FC } from 'react';
  const Waitlist: FC;
  export default Waitlist;
}

declare module '@/pages/NotFound' {
  import { FC } from 'react';
  const NotFound: FC;
  export default NotFound;
}

declare module '@/pages/AboutPage' {
  import { FC } from 'react';
  const AboutPage: FC;
  export default AboutPage;
}

declare module '@/pages/CompaniesPage' {
  import { FC } from 'react';
  const CompaniesPage: FC;
  export default CompaniesPage;
}

declare module '@/pages/ContactPage' {
  import { FC } from 'react';
  const ContactPage: FC;
  export default ContactPage;
}
