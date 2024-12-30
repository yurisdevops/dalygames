"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export const FavoriteCard = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [favorite, setFavorite] = useState("");

  const handleButton = () => {
    setShowInput(!showInput);
    setInput("");
  };

  const handleAddFavorite = () => {
    if (input !== "") {
      setFavorite(input);
    }
    handleButton();
  };

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={handleButton}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleButton}
          className="self-start hover:scale-110 duration-200 transition-all"
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}
      {favorite && (
        <div>
          <span className="text-white">Jogo favorito</span>
          <p className="font-bold text-white">{favorite}</p>
        </div>
      )}
      {!favorite && (
        <p
          className="font-bold text-white cursor-pointer"
          onClick={handleAddFavorite}
        >
          Adicionar jogo
        </p>
      )}
    </div>
  );
};
