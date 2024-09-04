import { ChevronLeft , ChevronRight } from 'lucide-react';

export default function Pagination(){
    return(
        <ul className="pagination">
            <li>
                <button className="arrow-btn">
                <ChevronLeft size={18} />
                </button>
            </li>
            <li>
            <ul className="pagination-list">
                <li>
                    <button>
                    </button>
                </li>
            </ul>
            </li>
            <li>
                <button className="arrow-btn">
                <ChevronRight size={18} />
                </button>
            </li>
        </ul>
    )
}