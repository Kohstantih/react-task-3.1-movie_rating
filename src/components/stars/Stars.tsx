import { Star } from "./Star";

type Stars = {
    count: number,
}

export function Stars({ count = 0 }:Stars) {
    if(count <= 0 || count > 5 || typeof count !== 'number') return;

    const result = [];

    for (let i = 0; i < count; i += 1) {
        result.push(<li key={i}><Star/></li>);
    }

    return (
        <ul className="card-body-stars">
           { result }
        </ul>
    )
}
