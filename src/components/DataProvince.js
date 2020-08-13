import React, { Component } from 'react';

export default class DataProvince extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        const apiUrl = 'https://api.kawalcorona.com/indonesia/provinsi';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ items: data }))
            .then(testing => console.log(testing));
    }

    render() {

        const { items } = this.state

        return (
            <div>
                <section class="lead-landing-section">
                    <div class="container">
                        <h6 class="text-center text-info font-weight-bold">How we can help</h6>
                        <h2 class="text-center font-weight-bold pb-4 mb-5">
                            The ultimate bootstrap <br />
                designer kit.
                </h2>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-hover table-striped table-bordered">
                                        <thead class="" style={{ 'background-color': '#FE3F3E', }}>
                                            <tr class="text-white" align="center">
                                                <th scope="col">No</th>
                                                <th scope="col">Provinsi</th>
                                                <th scope="col">Positif</th>
                                                <th scope="col">Sembuh</th>
                                                <th scope="col">Meninggal</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {items.map((item, index) =>
                                                <tr>
                                                    <td align="center">{index++ + 1}</td>
                                                    <td key={index}>{item.attributes.Provinsi}</td>
                                                    <td>{item.attributes.Kasus_Posi}</td>
                                                    <td>{item.attributes.Kasus_Semb}</td>
                                                    <td>{item.attributes.Kasus_Meni}</td>
                                                </tr>
                                            )}


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </section >
            </div>

        );
    }
}