<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChangePasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('oldPassword', 'password', [
                'label' => 'Contraseña actual'
            ])
            ->add('newPassword', 'repeated', [
                'type' => 'password',
                'invalid_message' => 'Contraseñas deben ser iguales',
                'required' => true,
                'first_options'  => ['label' => 'Contraseña nueva'],
                'second_options' => ['label' => 'Repetir contraseña'],
            ])
            ->add('save', SubmitType::class, array('label' => 'Guardar'))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Form\Model\ChangePassword',
        ]);
    }

    public function getName()
    {
        return 'change_password';
    }
}
