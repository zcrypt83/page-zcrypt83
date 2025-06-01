// page.tsx can remain a Server Component. Hero, Skills, Projects are Client Components.
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects'; // Import the Projects component

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects /> {/* Added the Projects component here */}

      {/* Placeholder for further content or footer spacing */}
      {/* This div can be removed when a real Contact section or Footer takes up space */}
      <div className='h-[100px]'>
          {/* <p className='text-center pt-10 text-textSecondary'>[End of current content]</p> */}
      </div>
    </>
  );
}
