import Link from "next/link";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/server-fetch">Server Fetch</Link>
      </li>
      <li>
        <Link href="/client-fetch">Client Fetch</Link>
      </li>
    </ul>
  );
};

export default Menu;
