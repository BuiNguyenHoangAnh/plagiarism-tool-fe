import { Component, OnInit } from '@angular/core';
import { CheckPlagiarismService } from '../check-plagiarism.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  data: String = ''
  result: String = ''

  constructor(private checkPlagiarism: CheckPlagiarismService) { }

  ngOnInit(): void {
  }

  check() {
    this.checkPlagiarism.checkPlagiarism(this.data).subscribe((res:any)=>{
      this.result = res.result
    })
  }
}
