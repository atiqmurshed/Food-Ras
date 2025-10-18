
const SectionTitle = ({ heading, subHeading }) => {

    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <h2 className="text-yellow-600 mb-4"> --- {subHeading} --- </h2>
            <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
}
export default SectionTitle;