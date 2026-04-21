// ✅ Este componente pode ser DELETADO.
// O menu mobile agora é tratado pelo <Sheet> do shadcn dentro do Navbar.jsx.
// Mantido aqui apenas como referência.

import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
