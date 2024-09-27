import Footer from "@components/structure/footer/footer";
import PasswordGenerator from "@components/ui/password-generator";

import './page.css';

const Generate = () => {
  return (
    <div>
      <div className="ms-auto me-auto w-full max-w-[90ch] min-h-screen flex flex-col">
        <main className="w-full flex-grow flex items-center justify-center py-16 space-y-16 px-16">
          <section id="generate" className="w-full">
            <PasswordGenerator />
          </section>
        </main>

        <div className="py-8 md:px-0 px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Generate;
