<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UpdatePrivacyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('newsletter', 'checkbox', [
                'label' => 'Acepto recibir newsletters',
                'required' => false,
                'attr' => array('style' => 'display: inline-block', )
            ])
            ->add('cookies', 'checkbox', [
                'label' => 'Acepto el uso de cookies',
                'required' => false,
                'attr' => array('style' => 'display: inline-block')
            ])
            ->add('save', SubmitType::class, array('label' => 'Guardar'))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Form\Model\ChangePrivacy',
        ]);
    }

    public function getName()
    {
        return 'update_privacy';
    }
}
