import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleData, sampleDataWithResources } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scheduler';
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleDataWithResources;

  public group: any = {
    resources: ["Rooms"],
    orientation: "vertical",
  };

  public resources: any[] = [
    {
      name: "Rooms",
      data: [
        { text: "Event", value: 1, color: "#6eb3fa",height:"400px" },
        { text: "Publications", value: 2, color: "#f58a90",height:"400px" },
        { text: "Monitor", value: 3, color: "#es8a76",height:"400px" },

        { text: "Shift", value: 4, color: "#v88u7a",height:"400px" },

        { text: "Tree", value: 5, color: "#f5958a",height:"400px" },

        { text: "Appointment", value: 6, color: "#x5818a",height:"400px" },

      ],
      field: "roomId",
      valueField: "value",
      textField: "text",
      colorField: "color",
      heightField:"height"
    },
  ];
}
