import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  miFormulario:FormGroup =this.fb.group({
    numeroFuncionario:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });

  
  constructor(private fb:FormBuilder,private vservice:ValidatorService, private router: Router,private authService:AuthService){
    
  }

  ngOnInit(): void {
    this.miFormulario.reset({
     
    });
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
    && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

  login() {
    console.log('click');
    const { numeroFuncionario, password } = this.miFormulario.value;
    console.log(numeroFuncionario,password);
    this.authService.login( numeroFuncionario, password )
      .subscribe( ok => {
        console.log(numeroFuncionario,password,'adentro');
        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Numero de funcionario o password incorrecto ', ok, 'error');
        }
      });
  }


}
