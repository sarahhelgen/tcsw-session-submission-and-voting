import { useHistory } from 'react-router-dom';

function PanelViewPage() {
    const history = useHistory();

    // const moveToSelectedPage = () => {
    //     history.push()
    // }

    return(
        <div>
            <h1>TCSW Panelists</h1>
            <h5>Community Voting: date-date</h5>

            <br/>

            <h5>page</h5>

            <h5>
                page
                <button>back</button>
                <button>forward</button>
            </h5>

            <table className='panelist-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Industry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rain green</td>
                        <td>TCSW</td>
                        <td>Technology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PanelViewPage;