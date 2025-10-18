
const Cover = ({ img }) => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage:`url("${img}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut quasi. In aut et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;