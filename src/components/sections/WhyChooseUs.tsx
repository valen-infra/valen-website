import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="rounded-3xl overflow-hidden">
            <img
              alt="Valen Info IT experts collaborating on high-stakes business strategy"
              className="w-full h-auto object-cover rounded-3xl"
              src="/images/why-choose-us.png"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-label-md text-on-primary/80 mb-2">Market Leader</p>
            <h3 className="text-headline-lg font-bold text-on-primary">#1</h3>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-label-md uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-headline-lg font-bold leading-tight">Unlock the potential of your business.</h2>
            <h4 className="text-body-lg text-primary font-semibold italic">
              Best Creative IT Agency And Solutions Since 2005.
            </h4>
            <p className="text-body-md text-text-muted leading-relaxed">
              Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus at. Aliquam cursus nunc arcu,
              condimentum efficiturunt tellus iaculis faucibus Quisque gravida.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-lg">
                70%
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Strategy</h4>
                <p className="text-body-md text-text-muted">
                  Morbi interdum pellentesque nunc, luctuso pretium nullagoneq luctus at. Aliquam one cursus nunc arcu.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-lg">
                98%
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Audience</h4>
                <p className="text-body-md text-text-muted">
                  Morbi interdum pellentesque nunc, luctuso pretium nullagoneq luctus at. Aliquam one cursus nunc arcu.
                </p>
              </div>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1 hover:gap-4 transition-all duration-300"
            href="#"
          >
            About More <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
