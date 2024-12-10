import {FC} from "react";
import {TeamWorkerInterface} from "@/utils/types/home.interface";
import TeamWorker from "@/components/team/teamWorker";

interface Props {
    workers : TeamWorkerInterface[]
    clickHandler : (index : number) => void
    activeIndex : number | null
}
const TeamWorkers:FC<Props> = ({workers,clickHandler,activeIndex}) => {
    return(
        <div className="flex flex-col">
            {workers.map(
                (item,index) => (
                    <TeamWorker key={index} worker={item} clickHandler={clickHandler} activeIndex={activeIndex}/>
                )
            )}
        </div>
    )
}
export default TeamWorkers