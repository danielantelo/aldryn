<?php

namespace AppBundle\Admin;

use AppBundle\Admin\Type\MediaPreviewType;
use Sonata\AdminBundle\Form\FormMapper;

class SliderImageAdmin extends MediaAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        // check if it is embedded
        if ($this->hasParentFieldDescription()) {
            $object = $this->getCurrentObjectFromCollection($this);
        } else {
            $object = $this->getSubject();
        }

        $formMapper
            ->add('title', 'text', [
                'required' => true,
                'label' => 'media.fields.title',
                'required' => false
            ])
            ->add('file', 'file', [
                'required' => false,
                'label' => 'media.fields.file',
            ])
            ->add('preview', MediaPreviewType::class, [
                'required' => false,
                'mapped' => false,
                'label' => 'media.fields.preview',
                'path' => $object ? $object->getPath() : null
            ])
        ;
    }
}
