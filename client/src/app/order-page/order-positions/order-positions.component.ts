import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionService} from "../../shared/services/position.service";
import {Observable} from "rxjs";
import {Position} from "../../shared/interfaces";
import {map, switchMap} from "rxjs/operators";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.css']
})
export class OrderPositionsComponent implements OnInit {

  positions$: Observable<Position[]>

  constructor(private route: ActivatedRoute,
              private positionsService: PositionService,
              private order: OrderService) {
  }

  ngOnInit(): void {
    this.positions$ = this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            return this.positionsService.fetch(params['id'])
          }
        ),
        map(
          (positions: Position[]) => {
            return positions.map(position => {
              position.quantity = 1
              return position
            })
          }
        )
      )
  }

  addToOrder(position: Position) {
    console.log(position)
    this.order.add(position)
  }
}
