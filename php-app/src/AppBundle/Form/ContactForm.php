<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactForm extends AbstractType
{
    public static $SUBJECTS = [
        'Consulta general',
        'Alta como cliente',
        'Cambio de datos personales',
        'Estado de mi pedido',
        'Solucitud de información de producto'
    ];

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', 'text', [
                'label' => 'Tu nombre'
            ])
            ->add('email', 'email', [
                'label' => 'Tu email'
            ])
            ->add('subject', 'choice', [
                'label' => 'Asunto',
                'choices' => array_combine(self::$SUBJECTS, self::$SUBJECTS)
            ])
            ->add('message', 'textarea', [
                'label' => 'Tu mensaje'
            ])

            ->add('save', SubmitType::class, array('label' => 'Enviar'))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Form\Model\ContactMessage',
        ]);
    }

    public function getName()
    {
        return 'contact_form';
    }
}
