/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTint, FaTruck, FaCheckCircle } from "react-icons/fa";

import paneerImg from "../../../public/curd.jpeg";
import gheeImg from "../../../public/curd.jpeg";
import butterImg from "../../../public/curd.jpeg";
import milkImg from "../../../public/curd.jpeg";
import curdImg from "../../../public/curd.jpeg";
import lassiImg from "../../../public/curd.jpeg";

const Product = () => {
  const ACCENT = "#6082B6";
  const LIGHT = "#EEE7DC";

  const products = [
    {
      name: "Fresh Milk",
      image: milkImg,
      description:
        "100% pure and fresh milk, rich in nutrients. Available in full cream, toned, and skimmed variants.",
      category: "Milk",
      badge: "Daily Essential",
    },
    {
      name: "Premium Paneer",
      image: paneerImg,
      description:
        "Soft, fresh paneer made from pure milk. Perfect for all your culinary needs.",
      category: "Paneer & Cheese",
      badge: "Chef’s Choice",
    },
    {
      name: "Pure Ghee",
      image: gheeImg,
      description:
        "Golden, aromatic ghee made from fresh cream. Traditional taste and nutrition.",
      category: "Ghee & Butter",
      badge: "Traditional",
    },
    {
      name: "Fresh Butter",
      image: butterImg,
      description:
        "Creamy, delicious butter made from fresh cream. Rich in taste and quality.",
      category: "Ghee & Butter",
      badge: "Rich & Creamy",
    },
    {
      name: "Creamy Curd",
      image: curdImg,
      description:
        "Smooth, tangy curd with active cultures. Perfect for digestion and taste.",
      category: "Curd & Yogurt",
      badge: "Probiotic",
    },
    {
      name: "Sweet Lassi",
      image: lassiImg,
      description:
        "Refreshing traditional lassi made from fresh curd. A perfect summer drink.",
      category: "Beverages",
      badge: "Best Seller",
    },
  ];

  return (
    <div className="min-h-screen w-full">

      {/* TOP GRADIENT HEADER */}
      <div
        className="py-14 md:py-24"
        style={{
          background: `linear-gradient(135deg, ${LIGHT}, ${ACCENT})`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-md">
          Our Dairy Products
        </h2>
      </div>

      {/* PRODUCT GRID SECTION */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl shadow-md border overflow-hidden flex flex-col"
              style={{ borderColor: ACCENT + "30" }}
            >
              <div className="h-40 md:h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] md:text-xs uppercase tracking-wide font-semibold"
                    style={{ color: ACCENT }}
                  >
                    {product.category}
                  </span>

                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] md:text-xs border"
                    style={{
                      backgroundColor: ACCENT + "15",
                      color: ACCENT,
                      borderColor: ACCENT + "30",
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 flex-1">
                  {product.description}
                </p>

                <button
                  className="mt-4 w-full text-xs md:text-sm font-medium py-2.5 rounded-full transition-all"
                  style={{
                    border: `1px solid ${ACCENT}`,
                    color: ACCENT,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = ACCENT;
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = ACCENT;
                  }}
                >
                  Know More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 md:py-16" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            style={{ color: ACCENT }}
          >
            Why Choose Our Products?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <motion.div
              className="text-center p-6 rounded-xl shadow-sm border bg-white"
              style={{ borderColor: ACCENT + "30" }}
            >
              <FaTint className="text-5xl mx-auto mb-4" style={{ color: ACCENT }} />
              <h3 className="text-xl font-semibold mb-2">100% Pure</h3>
              <p className="text-slate-600">
                No additives, preservatives, or artificial ingredients.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl shadow-sm border bg-white"
              style={{ borderColor: ACCENT + "30" }}
            >
              <FaTruck className="text-5xl mx-auto mb-4" style={{ color: ACCENT }} />
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-slate-600">
                Delivered fresh to your doorstep every morning.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl shadow-sm border bg-white"
              style={{ borderColor: ACCENT + "30" }}
            >
              <FaCheckCircle className="text-5xl mx-auto mb-4" style={{ color: ACCENT }} />
              <h3 className="text-xl font-semibold mb-2">Quality Tested</h3>
              <p className="text-slate-600">
                Every batch tested for purity and quality.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
