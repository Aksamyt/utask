import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ApiService } from 'utask-lib';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  templateUrl: './templates.html',
})
export class TemplatesComponent implements OnInit {
  templates: Template[];
  display: { [key: string]: boolean } = {};

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.templates = this.route.parent.snapshot.data.templates;
  }
}
