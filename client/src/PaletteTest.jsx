import React from "react";

const palettes = [
  {
    name: "Tropska avantura",
    bright: {
      primary: "#40e0d0",
      secondary: "#ffd700",
      text: "#2f4f4f",
      background: "#fdfdfd",
      accent: "#ff7f50",
      highlight: "#228b22",
    },
    dark: {
      primary: "#0e4f4f",
      secondary: "#a88f00",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#b4532d",
      highlight: "#145a32",
    },
  },
  {
    name: "Minimalistički nomad",
    bright: {
      primary: "#0077b6",
      secondary: "#ff7f11",
      text: "#333333",
      background: "#f5f5f5",
      accent: "#eaeaea",
      highlight: "#1e1e1e",
    },
    dark: {
      primary: "#004466",
      secondary: "#c85d0d",
      text: "#e0e0e0",
      background: "#121212",
      accent: "#555555",
      highlight: "#f0a500",
    },
  },
  {
    name: "Planinski pejzaž",
    bright: {
      primary: "#16a085",
      secondary: "#c8d6e5",
      text: "#2c3e50",
      background: "#fdfdfd",
      accent: "#f4a261",
      highlight: "#4b6a88",
    },
    dark: {
      primary: "#0b4740",
      secondary: "#8a9cb0",
      text: "#eaeaea",
      background: "#1a1a1a",
      accent: "#b76c3b",
      highlight: "#354a60",
    },
  },
  {
    name: "Luksuzni travel brend",
    bright: {
      primary: "#0a2647",
      secondary: "#f0a500",
      text: "#333333",
      background: "#fafafa",
      accent: "#144272",
      highlight: "#e6e6e6",
    },
    dark: {
      primary: "#06172c",
      secondary: "#c88700",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#0f3059",
      highlight: "#999999",
    },
  },
  {
    name: "Pustinjska ekspedicija",
    bright: {
      primary: "#d4a373",
      secondary: "#e9c46a",
      text: "#3e3e3e",
      background: "#fcf8f5",
      accent: "#c97b63",
      highlight: "#264653",
    },
    dark: {
      primary: "#8b6849",
      secondary: "#b99d52",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#8f5641",
      highlight: "#17313e",
    },
  },
  {
    name: "Urban Explorer",
    bright: {
      primary: "#74c0fc",
      secondary: "#ffd43b",
      text: "#212529",
      background: "#f5f5f5",
      accent: "#ff6b6b",
      highlight: "#495057",
    },
    dark: {
      primary: "#3378a3",
      secondary: "#d4b020",
      text: "#eaeaea",
      background: "#121212",
      accent: "#b44d4d",
      highlight: "#2e2e2e",
    },
  },
  {
    name: "Nordijska putovanja",
    bright: {
      primary: "#415a77",
      secondary: "#e0e1dd",
      text: "#1b263b",
      background: "#fdfdfd",
      accent: "#f4a261",
      highlight: "#778da9",
    },
    dark: {
      primary: "#27384a",
      secondary: "#c6c7c4",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#b8743a",
      highlight: "#4e637a",
    },
  },
  {
    name: "Egzotična destinacija",
    bright: {
      primary: "#219ebc",
      secondary: "#ffb703",
      text: "#023047",
      background: "#fdfdfd",
      accent: "#fb8500",
      highlight: "#8ecae6",
    },
    dark: {
      primary: "#13637a",
      secondary: "#cc9300",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#c86a00",
      highlight: "#639fb8",
    },
  },
  {
    name: "Safari stil",
    bright: {
      primary: "#616f39",
      secondary: "#f2e8cf",
      text: "#3e432e",
      background: "#fafafa",
      accent: "#bc4749",
      highlight: "#a7c957",
    },
    dark: {
      primary: "#3f4826",
      secondary: "#d4c9aa",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#913336",
      highlight: "#6e8c43",
    },
  },
  {
    name: "Boho putnik",
    bright: {
      primary: "#2a9d8f",
      secondary: "#e9c46a",
      text: "#6a4e42",
      background: "#fdfdfd",
      accent: "#f4a261",
      highlight: "#264653",
    },
    dark: {
      primary: "#1f6e64",
      secondary: "#b99d52",
      text: "#e0e0e0",
      background: "#1a1a1a",
      accent: "#b76c3b",
      highlight: "#17313e",
    },
  },
];

export default function PaletteTest() {
  return (
    <div className="grid grid-cols-1 gap-10 p-6">
      {palettes.map((palette, idx) => (
        <div key={idx} className="border rounded-xl overflow-hidden shadow">
          <h2 className="text-2xl font-bold mb-4 p-4">{palette.name}</h2>
          <div className="grid grid-cols-2">
            {/* Light Example */}
            <div
              className="p-6"
              style={{
                backgroundColor: palette.bright.background,
                color: palette.bright.text,
              }}
            >
              <h3
                className="text-xl mb-2"
                style={{ color: palette.bright.primary }}
              >
                Light Mode
              </h3>
              <p className="mb-4">
                Ovo je primer aplikacije za putovanja koristeći paletu "
                {palette.name}".
                <span style={{ color: palette.bright.highlight }}>
                  {" "}
                  Akcentovane reči
                </span>{" "}
                su ovde.
              </p>
              <input
                className="border rounded px-2 py-1 mb-3 w-full"
                style={{
                  borderColor: palette.bright.accent,
                  color: palette.bright.text,
                }}
                placeholder="Pretraga destinacija"
              />
              <button
                className="rounded px-4 py-2"
                style={{
                  backgroundColor: palette.bright.primary,
                  color: palette.bright.background,
                }}
              >
                Pretraži
              </button>
            </div>

            {/* Dark Example */}
            <div
              className="p-6"
              style={{
                backgroundColor: palette.dark.background,
                color: palette.dark.text,
              }}
            >
              <h3
                className="text-xl mb-2"
                style={{ color: palette.dark.primary }}
              >
                Dark Mode
              </h3>
              <p className="mb-4">
                Ovo je primer aplikacije za putovanja koristeći paletu "
                {palette.name}".
                <span style={{ color: palette.dark.highlight }}>
                  {" "}
                  Akcentovane reči
                </span>{" "}
                su ovde.
              </p>
              <input
                className="border rounded px-2 py-1 mb-3 w-full"
                style={{
                  borderColor: palette.dark.accent,
                  color: palette.dark.text,
                  backgroundColor: palette.dark.secondary,
                }}
                placeholder="Pretraga destinacija"
              />
              <button
                className="rounded px-4 py-2"
                style={{
                  backgroundColor: palette.dark.primary,
                  color: palette.dark.background,
                }}
              >
                Pretraži
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
