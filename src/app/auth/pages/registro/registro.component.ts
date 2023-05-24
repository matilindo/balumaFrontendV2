import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario:FormGroup =this.fb.group({
    nombre:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(this.vservice.emailPattern)]],
    numeroFuncionario:['',[Validators.required]],
    username:['',[Validators.required,this.vservice.noPuedeExistir]],
    password:['',[Validators.required]]
  });

  constructor(private fb:FormBuilder,private vservice:ValidatorService,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.miFormulario.reset({ });
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
    && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

  registro() {
    const { nombre, email,username, password,numeroFuncionario } = this.miFormulario.value;

    this.authService.registro( nombre, email,username, password,numeroFuncionario )
      .subscribe( ok => {
        
        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
          console.log(nombre, email,username, password,numeroFuncionario);
        } else {
          Swal.fire('Hay un error en el registro, intente nuevamente', ok, 'error');
        }
      });

  }

}
