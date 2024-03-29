import { Component, OnInit } from '@angular/core';
import { CheckPlagiarismService } from '../check-plagiarism.service';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  data: String = ''
  result: String = ''

  context: any;
  popup: Boolean = false;

  chartOptions = {
    animationEnabled: true,
    theme: "light",
    data: [{
      type: "pie",
      startAngle: 45,
      indexLabel: "{name}: {y}",
      indexLabelPlacement: "inside",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 25, name: "Plagiarized" },
        { y: 75, name: "Unique" },
      ]
    }]
  }

  constructor(private checkPlagiarism: CheckPlagiarismService, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  // ref: https://stackblitz.com/edit/angular-import-file?file=src%2Fapp%2Fapp.component.ts
  openFile(event: any): void {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = (() => {
      if (reader.result) {
        this.context = JSON.parse(reader.result.toString())
        console.log(JSON.parse(reader.result.toString()));
      }
    });
    reader.readAsText(input.files[0], 'utf-8');
  }

  check() {
    this.popup = true;
    this.checkPlagiarism.checkPlagiarism(this.data).subscribe((res: any) => {
      this.result = res.result
    })
  }
}
