import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  fileData: File = null;
  uploadResponse: any;
  fileStatus: boolean =false;
  uploadFileUrl= "http://localhost:8083/file-upload/uploadFile"

  constructor(private http: HttpClient, private adminService: AdminService, private authService: AuthService, private route:Router) { }

  ngOnInit() {
  }

  //  fileProgress(fileInput: any) {
  //      this.fileData = <File>fileInput.target.files[0];
  //  }
   
  //  onSubmit() {
  //      const formData: FormData = new FormData();
  //      formData.append('file', this.fileData,this.fileData.name);
  //     this.adminService.uploadFile(formData).subscribe((response)=>
  //      {
  //        this.fileStatus=true;
  //          this.uploadResponse=response;
  //      })
  //  }
  

  
  
  uploadFile(event) {
      this.fileData = <File>event.target.files[0];
    
      let formData: FormData = new FormData();
      formData.append('file', this.fileData, this.fileData.name);
    
      this.adminService.uploadFile(formData).subscribe(
              (response)=>{
                // console.log(response+"******");
                // this.fileStatus=true;
                // this.uploadResponse=response;
        
               } ,
               (responseError)=>{
                 this.route.navigate(['summary']);
               })
    }
  }

