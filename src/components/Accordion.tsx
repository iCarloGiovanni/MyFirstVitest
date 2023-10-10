import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "-" : "+"}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
