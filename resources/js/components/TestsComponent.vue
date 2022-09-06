<template>
    <!-- Begin Page Content -->
    <div class="container">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <!-- Content Row -->
        <!-- Batteries Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Batteries
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">5</div>
                        </div>
                        <div class="col-auto">
                            <i class=" fa-2x  "><img src="/img/icon-battery.gif" style="height:50px; width: 50px;"/></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content Row -->
        <div class="row">
            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Battery Overview</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="">
                            <h6 class="m-0 font-weight-bold text-primary">Battery Repaired</h6>
                            <table class="table" id="">
                                <thead>

                                <tr>
                                    <th>Client</th>
                                    <th>Battery</th>
                                    <th>Battery Type</th>
                                    <th>Status</th>
                                    <th>Date Repair</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>KSR</td>
                                    <td>ETWOW</td>
                                    <td>Etwow Poli 33V 6.5Ah 214.5Wh</td>
                                    <td><img src="/img/icon-battery2.gif" style="height:30px; width: 30px;"/>Repaired
                                    </td>
                                    <td>23/08/2021</td>

                                </tr>
                                <tr>
                                    <td>KSR</td>
                                    <td>ETWOW</td>
                                    <td>Etwow Poli 33V 6.5Ah 214.5Wh</td>
                                    <td><img src="/img/icon-battery2.gif" style="height:30px; width: 30px;"/>Repaired
                                    </td>
                                    <td>23/08/2021</td>

                                </tr>
                                <tr>
                                    <td>KSR</td>

                                    <td>ZEEWAY</td>
                                    <td>ZE722301 72V 23Ah 1656 Wh
                                    </td>
                                    <td><img src="/img/icon-battery2.gif" style="height:30px; width: 30px;"/>Repaired
                                    </td>
                                    <td>06/08/2021</td>

                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="">
                            <h6 class="m-0 font-weight-bold text-primary">Battery Pending</h6>
                            <table class="table" id="">
                                <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Battery</th>
                                    <th>Battery Type</th>
                                    <th>Status</th>
                                    <th>Date Repair</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>KSR</td>
                                    <td>NIU</td>
                                    <td>N-SERIES 60V 26Ah 1560Wh
                                    </td>
                                    <td><img src="/img/pending.gif" style="height:30px; width: 30px;"/>Pending</td>
                                    <td>17/08/2021</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="">
                            <h6 class="m-0 font-weight-bold text-primary">Battery Not Repaired</h6>
                            <table class="table" id="">
                                <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Battery</th>
                                    <th>Battery Type</th>
                                    <th>Status</th>
                                    <th>Date Repair</th>
                                </tr>
                                </thead>
                                <tbody>


                                <tr>
                                    <td>KSR</td>
                                    <td>NIU</td>
                                    <td>NQisport 60V 29Ah 1740Wh
                                    </td>
                                    <td><img src="/img/not.gif" style="height:30px; width: 30px;"/>Not Repaired</td>
                                    <td>17/08/2021</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Status chart</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                 aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <pie-chart :width="200" :height="200" :data="chartData" :options="chartOptions"></pie-chart>
                    </div>
                </div>
            </div>
            <!--
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">

            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Battery delivery </h6>
            </div>

            <div class="card-body">
                <div class="mb-1 small"><img src="/img/delivery.gif" style="height:50px; width: 50px;"/></div>
                <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 75%"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
            -->
        </div>
    </div>
    <!-- /.container-fluid -->
</template>

<script>
import PieChart from "../PieChart";

export default {
    components: {
        PieChart
    },
    data() {

        return {
            batteries: [],
            chartData: {
                labels: ["Pending", "Repaired", "Not Repaired"],
                datasets: [
                    {
                        data: [1, 3, 1],
                        backgroundColor: ['#4e73df', '#1cc88a', '#d20f0f'],
                        hoverBackgroundColor: ['#2e59d9', '#17a673', '#d20f0f'],
                        hoverBorderColor: "rgba(234, 236, 244, 1)",
                    }
                ]
            },
            chartOptions: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            }

        };
    },
    mounted() {
        console.log('Component mounted.')
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get('/api/tests_details')
                .then(res => {
                    this.tests = res.data;
                    //console.log(this.tests);
                    localStorage.setItem('tests', JSON.stringify(this.tests));
                })

        }
    }
};
</script>
