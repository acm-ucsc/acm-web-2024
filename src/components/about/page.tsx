"use client";
import AboutImages from "../aboutImages/page";
export default function About() {
  return (
    <>
      <div className="h-auto flex flex-row justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <h1 className="text-4xl font-bold text-secondary mb-4">ABOUT US</h1>
          <hr className="w-3/4 border-1 border-black mb-4" />
          <p className="text-1xl text-black w-4/5">
            The ACM UCSC is the student chapter of the Association for Computing
            Machinery at the University of Colombo School of Computing.
            Comprised of tech-savvy students, our group is dedicated to
            fostering a love for technology and computing. We aim to create a
            collaborative environment where students can learn, share, and grow
            together. Through organizing a variety of events, workshops, and
            competitions, we help students enhance their skills and expand their
            knowledge in computing. Additionally, we offer students the chance
            to connect with industry professionals, keeping them updated on the
            latest technological trends.
          </p>
          <p className="text-1xl text-black mt-4 w-4/5">
            Engaging with our chapter not only advances technological expertise
            but also hones essential personal development skills. By
            participating in our activities, students can develop
            organizational, leadership, and interpersonal skills, preparing them
            for future professional challenges. Join us to be a part of a
            vibrant community that supports both your technical and personal
            growth.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 p-24">
            <AboutImages />
        </div>
      </div>
    </>
  );
}
