/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
const ref = React.createRef();
import Pdf from "react-to-pdf";
import { AuthContext } from './AuthProvider';

const Blog = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className={`${theme? "dark": ""}`}>
            <div className=" dark:bg-slate-800 md:mt-0 drop-shadow-xl bg-left-bottom bg-no-repeat md:py-14 py-10 text-center mx-auto bg-[#F9F9FF]" >
                <h1 className="md:text-5xl mx-2 text-2xl font-bold text-[#60AA2D]">
                    Answering some common questions:
                </h1>
            <div>
                <Pdf targetRef={ref} filename="food-and-test.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn bg-[#60AA2D] border-none text-white rounded mt-6 hover:bg-[#3b7b10]'>Download PDF</button>}
                </Pdf>
            </div>

            </div>

            <div ref={ref} className="grid md:grid-cols-2 grid-cols-1 py-10 gap-8 md:py-20 mx-4 md:mx-32">
                <div className="dark:bg-slate-800 dark:text-white border-4 rounded-2xl p-6 border-[#A1CD44] shadow-xl bg-[#9582ff10]">
                    <h1 className="text-2xl">Differences between uncontrolled and controlled components.</h1>
                    <p className="text-xl">
                        <span className="text-[#A1CD44] font-bold ">Controlled</span>  components refer to components that have controlled by the parent component but <span className="text-[#A1CD44] font-bold ">Uncontrolled</span>  components refer to components that manage their own state internally.
                    </p>
                </div>
                <div className="dark:bg-slate-800 dark:text-white border-4 rounded-2xl p-6 border-[#A1CD44] shadow-xl bg-[#9582ff10]">
                    <h1 className="text-2xl">How to validate React props using PropTypes</h1>
                    <p className="text-xl">
                        We can validate React props using using  <span className="text-[#A1CD44] font-bold">PropTypes</span> by building some logic like any, number, string etc.
                    </p>
                </div>
                <div className="dark:bg-slate-800 dark:text-white border-4 rounded-2xl p-6 border-[#A1CD44] shadow-2xl shadow-[#A1CD44] bg-[#9582ff10]">
                    <h1 className="text-2xl">Difference between nodejs and express js.</h1>
                    <p className="text-xl">
                        The main difference between <span className="text-[#A1CD44] font-bold ">nodejs</span> and <span className="text-[#A1CD44] font-bold ">express js</span> is NodeJS is a package and Express is a framework.
                    </p>

                </div>
                <div className="dark:bg-slate-800 dark:text-white border-4 rounded-2xl p-6 border-[#A1CD44] shadow-2xl shadow-[#A1CD44] bg-[#9582ff10]">
                    <h1 className="text-2xl">What is a custom hook, and why will you create a custom hook?</h1>
                    <p className="text-xl">
                        <span className="text-[#A1CD44] font-bold">Custom hook</span>  is a functions that can be reuse.
                        I will create a custom hook to makes my code cleaner and reduce my time to write the code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;