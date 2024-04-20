import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import classes from './profilePage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

export default function ProfilePage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user, updateProfile } = useAuth();

  const submit = user => {
    updateProfile(user);
  };

  return (
    <div className={classes.container}>
  <div className={classes.details}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{marginRight: '10rem' }}>
        <Title title="Update Profile" />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            defaultValue={user.name}
            type="text"
            label="Name"
            {...register('name', {
              required: true,
              minLength: 5,
            })}
            style={{ width: '100rem' }}
          />
          <Input
            defaultValue={user.address}
            type="text"
            label="Address"
            {...register('address', {
              required: true,
              minLength: 10,
            })}
            error={errors.address}
            style={{ width: '100%' }} 
          />

          <Button type="submit" text="Update" backgroundColor="#009e84" />
        </form>
      </div>
      <div style={{ maxWidth: '44rem' }}>
        <ChangePassword />
      </div>
    </div>
  </div>
</div>



  );
}
