import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="mx-2 my-2 py-6 bg-blue-950 text-white rounded-xl">
      <div className="flex flex-col items-center gap-4">
        <Link to="/">
          <h1 className="text-2xl font-extrabold">حسابا</h1>
        </Link>

        <h3 className="text-center">
          آدرس شرکت: تهران – خیابان آزادی – بلوار اکبری – کوچه شهید عباس شرقی –
          نبش خیابان صادقی – پلاک ۲
        </h3>
      </div>
    </div>
  );
}
