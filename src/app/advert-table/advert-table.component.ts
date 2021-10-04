import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdvertTableDataSource, AdvertTableItem } from './advert-table-datasource';

@Component({
  selector: 'advert-table',
  templateUrl: './advert-table.component.html',
  styleUrls: ['./advert-table.component.css']
})
export class AdvertTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AdvertTableItem>;
  dataSource: AdvertTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'name', 'category', 'description'];

  constructor() {
    this.dataSource = new AdvertTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
