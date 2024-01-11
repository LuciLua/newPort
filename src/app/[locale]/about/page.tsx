import { TitleHomeSections } from "../../../components/TitleHomeSections";

export default function about() {
    return (
        <div className="z-10 relative flex justify-center items-center w-fit h-fit gap-10 mx-auto flex-wrap">
            <div className="flex flex-col w-fit justify-center">
                <TitleHomeSections section="about" />
                <div className="mt-10 indent-10 text-justify max-w-[600px] w-full h-fit text-[var(--text-default)]">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita provident perspiciatis nesciunt culpa sit ad tenetur dicta corporis, non unde fugiat rem voluptatibus vitae et commodi quisquam itaque quo.</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum exercitationem, debitis laborum odio voluptate dolorum sequi dolore ullam quia tempora, deleniti expedita possimus amet vero illo aspernatur aliquam fugiat ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid est iste nihil quaerat expedita, consequatur ad rem, blanditiis ex, sint vel vero temporibus! Vel voluptas iusto aliquid delectus et corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, placeat ad dolores ullam, quae quas architecto labore quaerat nulla laudantium vero corporis eius deserunt, itaque quod ea at vel cumque.</p>
                </div>
            </div>
            <div className="relative z-0 overflow-hidden rounded-full w-[250px] h-[250px]">
                <img src="/assets/images/coding1.jpg" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}