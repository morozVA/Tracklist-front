import {Component, OnInit} from '@angular/core';
import {TracksService} from './tracks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TracksService]
})

export class AppComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(private TracksService: TracksService) {
  }

  ngOnInit() {
    this.TracksService.getTracks().subscribe(trackList => {
      this.trackList = trackList.playlist;
      this.genreList = trackList.genreList;
      this.singerList = trackList.singerList;
      this.yearList = trackList.yearList;

      $(function () {
        const table = $('#example').DataTable({
          'lengthMenu': [[10, 20, -1], [10, 20, 'All']],
          'order': [[1, 'asc']],
          'aoColumnDefs': [{
            'bSortable': false,
            'aTargets': ['nosort']
          }]
        });
        window.table = table;
        $('#example').removeClass('d-none');
      });

    });
  }

  onChangeSinger($event) {
    if ($event.singer !== undefined) {
      window.table.column(0).search('', true, false).column(1).search($event.singer, true, false).draw();
    } else {
      window.table.column(0).search('', true, false).column(1).search('', true, false).draw();
    }
  }

  onChangeGenre($event) {
    if ($event.genre !== undefined) {
      window.table.column(0).search('', true, false).column(2).search($event.genre, true, false).draw();
    } else {
      window.table.column(0).search('', true, false).column(2).search('', true, false).draw();
    }
  }

  onChangeYear($event) {
    if ($event.year !== undefined) {
      window.table.column(0).search('', true, false).column(3).search($event.year, true, false).draw();
    } else {
      window.table.column(0).search('', true, false).column(3).search('', true, false).draw();
    }
  }

  title = 'Symfony2 Test Application';

}
