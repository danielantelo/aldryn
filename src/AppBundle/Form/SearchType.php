<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class SearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('searchTerm', 'text', [])
            ->add('search', SubmitType::class, array('label' => 'Buscar'))
        ;
    }

    public function getName()
    {
        return 'search_form';
    }
}
