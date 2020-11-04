import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--green);
  padding: 2rem;
  color: white;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    & > *:not(:first-child) {
      margin-left: 2rem;
    }
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
  h2 {
    font-weight: normal;
    margin: 0;
  }
  .brand {
    z-index: 2;
  }
  @media (max-width: 650px) {
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    ul {
      z-index: 1;
      display: flex;
      flex-direction: column;
      position: fixed;
      padding: 12rem 12rem 0 2rem;
      top: 0;
      left: 0;
      bottom: 0;
      text-align: left;
      background-color: var(--green);
      transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(-100%)"};
      transition: transform 0.3s ease-in-out;

      & > *:not(:first-child) {
        margin-top: 4rem;
        margin-left: 0rem;
      }

      @media (max-width: 300px) {
        width: 100%;
      }
    }
  }
`

const StyledBurger = styled.button`
  display: none;
  @media (max-width: 650px) {
    justify-self: end;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 12;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onKeyDown={event => {
        if (event.key === "Escape") {
          setOpen(false)
        }
      }}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <StyledMenu open={open} ref={node} role="navigation">
      <div className="brand">
        <Link to="/">
          <h2 className="code">
            <strong>Philip Andreas</strong> Kingo
          </h2>
        </Link>
      </div>
      <ul>
        <li>
          <Link className="code" onClick={() => setOpen(false)} to="/pasta">
            Copy/Paste
          </Link>
        </li>
        <li>
          <Link className="code" onClick={() => setOpen(false)} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Burger open={open} setOpen={setOpen} />
    </StyledMenu>
  )
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      if (event.type === "keydown" && event.key !== "Escape") {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("keydown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.addEventListener("keydown", listener)
    }
  }, [ref, handler])
}
